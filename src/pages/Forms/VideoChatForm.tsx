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
    durationForOne: number;
};

const strings = {
    title: 'Создать видеочат',
    name: 'Название',
    dateTime: 'Дата и время проведения',
    duration: 'Длительность видеочата (в минутах)',
    durationForOne: 'Длительность для одного участника (в минутах)',
    namePlaceholder: 'Название видеочата',
};

export const VideoChatForm = () => {
    const tgContext = useTgWebAppContext();
    const minDate = new Date().toISOString().slice(0, 16);
    const {
        register,
        reset,
        handleSubmit,
        getValues,
        formState: { errors, isValid, touchedFields },
    } = useForm<FormInputs>({
        mode: 'all',
    });

    useEffect(() => {
        reset();
    }, []);

    const onFormSubmit = (data: FormInputs) => {
        // Отправляем данные о создании конференции в метрику
        ym && ym(93300398, 'reachGoal', 'video-chat-created');
        tgContext.tg.sendData(JSON.stringify(data));
        reset();
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
                        <NumberInput sx={formTextStyles} defaultValue={30}>
                            <NumberInputField
                                {...register('duration', {
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: errorMessages.useNumber,
                                    },
                                    min: {
                                        value: 0,
                                        message: errorMessages.biggerThanZero,
                                    },
                                    required: errorMessages.required,
                                })}
                            />
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
                            !!errors.durationForOne &&
                            touchedFields.durationForOne
                        }
                    >
                        <FormLabel sx={formTextStyles}>
                            {strings.durationForOne}
                        </FormLabel>
                        <NumberInput sx={formTextStyles} defaultValue={30}>
                            <NumberInputField
                                {...register('durationForOne', {
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: errorMessages.useNumber,
                                    },
                                    min: {
                                        value: 0,
                                        message: errorMessages.biggerThanZero,
                                    },
                                    validate: (value) => {
                                        if (
                                            parseInt(value) >
                                            parseInt(getValues('duration'))
                                        ) {
                                            return errorMessages.notBiggerThanDuration;
                                        }
                                        return true;
                                    },
                                    required: errorMessages.required,
                                })}
                            />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        {errors.durationForOne && (
                            <FormErrorMessage>
                                {errors?.durationForOne.message}
                            </FormErrorMessage>
                        )}
                    </FormControl>
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
