import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Heading,
    Box,
    Button,
    NumberInputField,
    Checkbox,
    NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import { useRootContext } from "../../contexts/rootContext";
import { formBoxStyles, formTextStyles, formButtonStyles, formDisabledButtonStyles } from '../../utils/styles';

type FormInputs = {
    name: string;
    datetime: Date;
    duration: number;
    durationForOne: number;
    organizer: string;
}

export const VideoChatForm = () => {
    const rootContext = useRootContext();
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid, touchedFields },
    } = useForm<FormInputs>({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    useEffect(() => {
        reset();
    }, []);

    const onFormSubmit = (data: FormInputs) => {
        // если организатор не указан - достаем его из объекта Telegram
        console.log(data);
        if (!data.organizer) {
            data.organizer = rootContext.tg.initDataUnsafe.user.username;
        }
        rootContext.tg.sendData(JSON.stringify(data))
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        // Если галочка стояла, но пользователь передумал - 
        // откатываем поле организатор до значения текущего пользователя
        if (isChecked) {
            reset({ organizer: rootContext.tg.initDataUnsafe.user.username })
        }
    }

    return (<Box sx={formBoxStyles} >
        <Form onSubmit={handleSubmit(onFormSubmit)} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box >
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
                    <Input colorScheme="orange" focusBorderColor='orange' sx={formTextStyles} {...register('datetime', {
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
                    {
                        // @ts-ignore
                    }
                    <NumberInput defaultValue={30} sx={formTextStyles} {...register('duration', {
                        pattern: {
                            value: /^[0-9]*$/,
                            message: 'Введите числовое значение'
                        },
                        required: 'Поле обязательно к заполнению',
                    })}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    {errors.duration && (
                        <FormErrorMessage>{errors?.duration.message}</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl mb='20px' isInvalid={!!errors.durationForOne && touchedFields.durationForOne}>
                    <FormLabel sx={formTextStyles}>Длительность для одного участника (в минутах)</FormLabel>
                    <NumberInput defaultValue={30} sx={formTextStyles} {...register('durationForOne', {
                        pattern: {
                            value: /^[0-9]*$/,
                            message: 'Введите числовое значение'
                        },
                        required: 'Поле обязательно к заполнению',
                    })}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    {errors.durationForOne && (
                        <FormErrorMessage>{errors?.durationForOne.message}</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl mb='20px' display="flex" alignItems="center">
                    <Checkbox colorScheme="orange" isChecked={isChecked} onChange={handleCheckboxChange} />
                    <FormLabel sx={formTextStyles} m='0' ml='10px'>Мероприятие провожу не я</FormLabel>

                </FormControl>
                {isChecked && (
                    <FormControl mb='20px' isInvalid={!!errors.organizer && touchedFields.organizer}>
                        <FormLabel sx={formTextStyles}>Кто будет орзанизатором мероприятия?</FormLabel>
                        <Input sx={formTextStyles} {...register('organizer', {
                            required: 'Поле обязательно к заполнению',
                        })}
                            type="text"
                            placeholder='@Telegram-username' />
                        {errors.organizer && (
                            <FormErrorMessage>{errors?.organizer.message}</FormErrorMessage>
                        )}
                    </FormControl>
                )}
            </Box>
            <Button type='submit' sx={isValid ? formButtonStyles : formDisabledButtonStyles} m='auto 0 10px 0'>Создать</Button>
        </Form>
    </Box >
    )
}
