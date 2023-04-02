import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Heading,
    Box,
    Button,
    Text
} from '@chakra-ui/react';
import { Form, redirect } from 'react-router-dom';
import { useRootContext } from "../../contexts/rootContext";
import { formBoxStyles, formTextStyles, formButtonStyles } from '../../utils/styles';

type FormInputs = {
    name: string;
    datetime: Date;
    duration: number;
    durationForOne: number;
    organizer: string;
}

export const VideoChatForm = () => {
    const rootContext = useRootContext();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid, isDirty, isSubmitting, touchedFields, submitCount },
    } = useForm<FormInputs>({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    useEffect(() => {
        reset();
    }, []);

    const onFormSubmit = (data: FormInputs) => {
        console.log(data);
        rootContext.tg.sendData(JSON.stringify(data))
    }

    return (<Box sx={formBoxStyles} >
        <Form onSubmit={handleSubmit(onFormSubmit)} style={{position:'relative', height: 'calc(100vh - 32px)'}}>
            <Heading as='h2' size='md' mb={'25px'} mt='15px'>Создать видеочат</Heading>
            <FormControl mb='20px' isInvalid={!!errors.name && touchedFields.name}>
                <FormLabel sx={formTextStyles}>Название</FormLabel>
                <Input sx={formTextStyles} {...register('name', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                        value: 2,
                        message: 'Минимум 2 символа',
                    },
                    maxLength: {
                        value: 255,
                        message: 'Максимум 255 символов',
                    },
                })}
                    type='text'
                    placeholder='Название видеочата (до 255 символов)' />
                {errors.name && (
                    <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
            </FormControl>
            <FormControl mb='20px' isInvalid={!!errors.datetime && touchedFields.datetime}>
                <FormLabel sx={formTextStyles}>Дата и время проведения</FormLabel>
                <Input  sx={formTextStyles} {...register('datetime', {
                    required: 'Поле обязательно к заполнению',
                })}
                    min={new Date().toISOString().slice(0, 16)}
                    type="datetime-local" />
                {errors.datetime && (
                    <FormErrorMessage>{errors?.datetime.message}</FormErrorMessage>
                )}
            </FormControl>
            <FormControl mb='20px' isInvalid={!!errors.duration && touchedFields.duration}>
                <FormLabel sx={formTextStyles}>Длительность видеочата (в минутах)</FormLabel>
                <Input sx={formTextStyles} {...register('duration', {
                    pattern: /^[0-9]+$/,
                    required: 'Поле обязательно к заполнению',
                })}
                    type="number"
                    placeholder='30' />
                {errors.duration && (
                    <FormErrorMessage>{errors?.duration.message}</FormErrorMessage>
                )}
            </FormControl>
            <FormControl mb='20px' isInvalid={!!errors.durationForOne && touchedFields.durationForOne}>
                <FormLabel sx={formTextStyles}>Длительность для одного участника (в минутах)</FormLabel>
                <Input sx={formTextStyles} {...register('durationForOne', {
                    pattern: /^[0-9]+$/,
                    required: 'Поле обязательно к заполнению',
                })}
                    type="number"
                    placeholder='30' />
                {errors.durationForOne && (
                    <FormErrorMessage>{errors?.durationForOne.message}</FormErrorMessage>
                )}
            </FormControl>
            <Button type='submit' sx={formButtonStyles}>Создать</Button>
        </Form>
    </Box >
    )
}
