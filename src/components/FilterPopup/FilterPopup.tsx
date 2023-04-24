import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    FormLabel,
    Input,
    Select,
    HStack,
    Checkbox,
} from '@chakra-ui/react';
import { modalStyles } from './styles';
import { h2TitleStyles, h3TitleStyles } from '../../utils/styles';
import { formTextStyles } from '../../pages/Forms/styles';
import { errorMessages } from '../../utils/constants';

export const FilterPopup = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const options = [
        { value: 'popular', label: 'По популярности' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent sx={modalStyles} textAlign="center">
                <ModalHeader as="h2" sx={h2TitleStyles}>
                    Умный поиск
                </ModalHeader>
                <ModalCloseButton top="36px" right="46px" h="12px" w="12px" />
                <ModalBody p="31px">
                    <FormLabel sx={h3TitleStyles} pb="16px !important">
                        Сортировка
                    </FormLabel>
                    <Select
                        defaultValue={options[0].value}
                        mb="26px !important"
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                    <FormLabel sx={h3TitleStyles} pb="26px !important">
                        Фильтрация
                    </FormLabel>
                    <HStack pb="26px !important">
                        <Checkbox colorScheme="orange">Впечатления</Checkbox>
                        <Checkbox colorScheme="orange">Мерч</Checkbox>
                    </HStack>
                    <FormLabel sx={h3TitleStyles} pb="26px !important">
                        Тип мероприятия
                    </FormLabel>
                    <HStack pb="26px !important">
                        <Checkbox colorScheme="orange">Онлайн</Checkbox>
                        <Checkbox colorScheme="orange">Офлайн</Checkbox>
                    </HStack>
                </ModalBody>

                <ModalFooter p="32px">
                    <Button
                        colorScheme="orange"
                        w="328px"
                        h="48px"
                        onClick={onClose}
                    >
                        Применить
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
