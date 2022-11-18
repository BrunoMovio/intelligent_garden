import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Modal,
  Text,
} from "@chakra-ui/react";

const SelectPlantModal = (props: { isOpen: boolean; onClose: () => any }) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          <Text>AAAA</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            onClick={() => {
              props.onClose();
            }}
          >
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectPlantModal;
