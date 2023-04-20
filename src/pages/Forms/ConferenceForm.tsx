// @ts-nocheck

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
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import { useTgWebAppContext } from '../../contexts/tgContext';
import {
    formBoxStyles,
    formTextStyles,
    formButtonStyles,
    formDisabledButtonStyles,
} from './styles';

import { errorMessages } from '../../utils/constants';

type FormInputs = {
    name: string;
    datetime: Date;
    duration: number;
    max_persons: number;
    organizer: string;
};

const strings = {
    title: 'Создать онлайн конференцию',
    name: 'Название',
    dateTime: 'Дата и время проведения',
    duration: 'Длительность конференции (в минутах)',
    max_persons: 'Максимальное количество участников',
    checkbox: 'Мероприятие провожу не я',
    organizer: 'Кто будет орзанизатором мероприятия?',
    tgPlaceholder: '@Telegram-username',
    namePlaceholder: 'Название конференции',
};

export const ConferenceForm = () => {
    const tgContext = useTgWebAppContext();
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const minDate = new Date().toISOString().slice(0, 16);
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
        // Отправляем данные о создании конференции в метрику
        ym && ym(93300398, 'reachGoal', 'online-conference-created');

        // если организатор не указан - достаем его из объекта Telegram
        if (!data.organizer) {
            data.organizer = tgContext.tg.initDataUnsafe.user.username;
        }
        tgContext.tg.sendData(JSON.stringify(data));
        reset();
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsChecked(event.target.checked);
        // Если галочка стояла, но пользователь передумал -
        // откатываем поле организатор до значения текущего пользователя
        if (isChecked) {
            reset({ organizer: tgContext.tg.initDataUnsafe.user.username });
        }
    };

    return (
        <Box sx={formBoxStyles}>
            <Form
                onSubmit={handleSubmit(onFormSubmit)}
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    <Heading as="h2" size="md" mb={'25px'} mt="15px">
                        {strings.title}
                    </Heading>
                    <FormControl
                        mb="20px"
                        isInvalid={!!errors.name && touchedFields.name}
                    >
                        <FormLabel sx={formTextStyles}>
                            {strings.name}
                        </FormLabel>
                        <Input
                            sx={formTextStyles}
                            {...register('name', {
                                required: errorMessages.required,
                                minLength: {
                                    value: 2,
                                    message: errorMessages.min,
                                },
                                maxLength: {
                                    value: 255,
                                    message: errorMessages.max,
                                },
                            })}
                            type="text"
                            placeholder={strings.namePlaceholder}
                        />
                        {errors.name && (
                            <FormErrorMessage>
                                {errors.name.message}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        mb="20px"
                        isInvalid={!!errors.datetime && touchedFields.datetime}
                    >
                        <FormLabel sx={formTextStyles}>
                            {strings.dateTime}
                        </FormLabel>
                        <Input
                            colorScheme="orange"
                            focusBorderColor="orange"
                            sx={formTextStyles}
                            {...register('datetime', {
                                required: errorMessages.required,
                            })}
                            min={minDate}
                            type="datetime-local"
                        />
                        {errors.datetime && (
                            <FormErrorMessage>
                                {errors?.datetime.message}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        mb="20px"
                        isInvalid={!!errors.duration && touchedFields.duration}
                    >
                        <FormLabel sx={formTextStyles}>
                            {strings.duration}
                        </FormLabel>
                        <NumberInput
                            defaultValue={30}
                            sx={formTextStyles}
                            {...register('duration', {
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: errorMessages.useNumber,
                                },
                                required: errorMessages.required,
                            })}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        {errors.duration && (
                            <FormErrorMessage>
                                {errors?.duration.message}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        mb="20px"
                        isInvalid={
                            !!errors.max_persons && touchedFields.max_persons
                        }
                    >
                        <FormLabel sx={formTextStyles}>
                            {strings.max_persons}
                        </FormLabel>
                        <NumberInput
                            defaultValue={100}
                            sx={formTextStyles}
                            {...register('max_persons', {
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: errorMessages.useNumber,
                                },
                                required: errorMessages.required,
                            })}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        {errors.max_persons && (
                            <FormErrorMessage>
                                {errors?.max_persons.message}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl mb="20px" display="flex" alignItems="center">
                        <Checkbox
                            colorScheme="orange"
                            isChecked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <FormLabel sx={formTextStyles} m="0" ml="10px">
                            {strings.checkbox}
                        </FormLabel>
                    </FormControl>
                    {isChecked && (
                        <FormControl
                            mb="20px"
                            isInvalid={
                                !!errors.organizer && touchedFields.organizer
                            }
                        >
                            <FormLabel sx={formTextStyles}>
                                {strings.organizer}
                            </FormLabel>
                            <Input
                                sx={formTextStyles}
                                {...register('organizer', {
                                    required: errorMessages.required,
                                })}
                                type="text"
                                placeholder={strings.tgPlaceholder}
                            />
                            {errors.organizer && (
                                <FormErrorMessage>
                                    {errors?.organizer.message}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    )}
                </Box>
                <Button
                    type="submit"
                    sx={isValid ? formButtonStyles : formDisabledButtonStyles}
                    m="auto 0 10px 0"
                >
                    Создать
                </Button>
            </Form>
        </Box>
    );
};
