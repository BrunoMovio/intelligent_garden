import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Modal,
  Text,
  Flex, 
  Spacer 
} from "@chakra-ui/react";
import { usePlant } from '../../../contexts/plant';

const SelectPlantModal = (props: { isOpen: boolean; onClose: () => any }) => {

  const { plantParams, setSelectedPlant, selectedPlants } = usePlant();

  const contentStyles = {
    backgroundColor: '#464646',
    color: 'rgba(255, 255, 255, 0.87)',
    width: '80vw',
    margin: 'auto auto',
    height: '50vh',
    borderRadius: 10
  };
  const headerStyles = {
    fontSize: '2rem'
  };
  const bodyStyles = {
    height: '100%',
    p: 15,
    display: "flex",
  };
  const footerStyles = {
    padding: 10,
    display: 'flex',
    justifyContent: 'end',
  };

  const onChangeSelect1 = (e: any) => {
    setSelectedPlant("plant1", e.target.value);
  }

  const onChangeSelect2 = (e: any) => {
    setSelectedPlant("plant2",e.target.value);
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalContent {...contentStyles}>
        <ModalHeader {...headerStyles} p={10}>Selecionar plantas</ModalHeader>
        <ModalBody {...bodyStyles}>
          <Spacer/>
          <Flex direction="column">
            <h3>Selecione a planta 1</h3>
            <select onChange={onChangeSelect1} value={selectedPlants.plant1.plant}>
              {plantParams!.map((plant,idx) => (
                <option key={plant.plant || idx}>
                  {plant.plant}
                </option>
              ))}
            </select>
          </Flex>
          <Spacer/>
          <Flex direction="column">
            <h3>Selecione a planta 2</h3>
            <select onChange={onChangeSelect2} value={selectedPlants.plant2.plant}>
              {plantParams!.map((plant,idx) => (
                <option key={plant.plant || idx} value={plant.plant}>
                  {plant.plant}
                </option>
              ))}
            </select>
          </Flex>
          <Spacer/>
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectPlantModal;
