import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormLabel,
    Select,
    HStack,
    Checkbox,
} from '@chakra-ui/react';
import {
    checkBoxContainerStyles,
    checkboxStyles,
    elementSpacingStyles,
    modalStyles,
    selectStyles,
} from './styles';
import { h2TitleStyles, h3TitleStyles } from '../../utils/styles';
import { BaseButton } from '../BaseButton';

const texts = {
    header: 'Умный поиск',
    sorting: 'Сортировка',
    filter: 'Фильтрация',
    events: 'Впечатления',
    merch: 'Мерч',
    eventType: 'Тип мероприятия',
    online: 'Онлайн',
    offline: 'Офлайн',
};

const options = [
    { value: 'popular', label: 'По популярности' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

export const FilterPopup = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent sx={modalStyles} textAlign="center">
                <ModalHeader as="h2" sx={h2TitleStyles}>
                    {texts.header}
                </ModalHeader>
                <ModalCloseButton top="36px" right="46px" h="12px" w="12px" />
                <ModalBody p="31px">
                    <FormLabel sx={h3TitleStyles} pb="16px">
                        {texts.sorting}
                    </FormLabel>
                    <Select
                        sx={selectStyles}
                        defaultValue={options[0].value}
                        mb="26px !important"
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                    <FormLabel
                        sx={{ ...h3TitleStyles, ...elementSpacingStyles }}
                    >
                        {texts.filter}
                    </FormLabel>
                    <HStack
                        sx={{
                            ...checkBoxContainerStyles,
                            ...elementSpacingStyles,
                        }}
                    >
                        <Checkbox sx={checkboxStyles} colorScheme="orange">
                            {texts.events}
                        </Checkbox>
                        <Checkbox sx={checkboxStyles} colorScheme="orange">
                            {texts.merch}
                        </Checkbox>
                    </HStack>
                    <FormLabel sx={{...h3TitleStyles, ...elementSpacingStyles}}>
                        {texts.eventType}
                    </FormLabel>
                    <HStack
                        sx={{...checkBoxContainerStyles, ...elementSpacingStyles}}
                    >
                        <Checkbox sx={checkboxStyles} colorScheme="orange">
                            {texts.online}
                        </Checkbox>
                        <Checkbox sx={checkboxStyles} colorScheme="orange">
                            {texts.offline}
                        </Checkbox>
                    </HStack>
                </ModalBody>

                <ModalFooter p="32px">
                    <BaseButton buttonText="Применить" onClick={onClose} />
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
