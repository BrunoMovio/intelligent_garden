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
import { usePlant } from '../../../contexts/plant';

const SelectPlantModal = (props: { isOpen: boolean; onClose: () => any }) => {

  const { plantParams } = usePlant();

  const styles = {
    backgroundColor: 'white',
    color: 'black',
    width: '80vw',
    margin: 'auto auto',
    height: '50vh'
  };
  const headerStyles = {
    fontSize: '2rem'
  };
  const bodyStyles = {
    height: '100%',
    p: 15
  };
  const footerStyles = {
    padding: 10,
    display: 'flex',
    justifyContent: 'end',
  };

  const onChangeSelect = (e: any) => {
    console.log(e.target.value);
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalContent {...styles}>
        <ModalHeader {...headerStyles} p={10}>Selecionar plantas</ModalHeader>
        <ModalBody {...bodyStyles}>
          <select onChange={onChangeSelect}>
            {plantParams!.map((plant,idx) => (
              <option key={plant.plant || idx}>
                {plant.plant}
              </option>
            ))}

          </select>
        </ModalBody>

        <ModalFooter {...footerStyles}>
          <Button
            p={10}
            mr={3}
            onClick={() => {
              props.onClose();
            }}
          >
            Close
          </Button>
          {/* <Button variant="ghost">Secondary Action</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectPlantModal;
