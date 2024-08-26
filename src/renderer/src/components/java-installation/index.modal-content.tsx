import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'

export interface ModalContentProps {
  isOpen: boolean
  onOpenChange: () => void
  onAction: () => void
}
export const _Modal = ({ isOpen, onOpenChange, onAction }: ModalContentProps) => {
  return (
    <Modal {...{ isOpen, onOpenChange }}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Invalid Folder</ModalHeader>
            <ModalBody>
              The folder you&apos;ve chosen does not contain a valid Java installation. Please
              select a different folder.
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onClose()
                  onAction()
                }}
              >
                Try Again
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
