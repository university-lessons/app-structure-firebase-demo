import React, { createContext, ReactElement, ReactNode, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

export interface ModalContextProps {
  show: Function;
  hide: Function;
}

const DEFAULT_VALUE = {
  show: () => {},
  hide: () => {},
};

export const ModalContext = createContext<ModalContextProps>(DEFAULT_VALUE);

interface AppModalProps {
  children: ReactElement;
}

export default function AppModal({ children }: AppModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const appModal = {
    show: (content: ReactElement) => {
      setModalContent(content);
      setModalVisible(true);
    },
    hide: () => setModalVisible(false),
  };

  return (
    <ModalContext.Provider value={appModal}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // this callback runs when device "back" button is pressed
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.content}>{modalContent}</View>
        </View>
      </Modal>

      {children}
    </ModalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0.5,0.5,0.5,0.5)",
  },
  content: {
    width: "80%",
    height: "80%",
    margin: 8,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
