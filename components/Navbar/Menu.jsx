import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";

const Menu = ({ open, selectedSubpages, toggleMenu }) => {
  console.log(selectedSubpages);
  return (
    <Modal isOpen={open} onOpenChange={toggleMenu} style={{ zIndex: 99999999 }}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {selectedSubpages.label}
        </ModalHeader>
        <ModalBody>
          {selectedSubpages?.subpages?.map((page, index) => (
            <Link
              className="cursor-pointer"
              href={page.href}
              key={page.name + index}
              onClick={() => selectService(page)}
            >
              <span className="text-black w-12">{index + 1})</span> {page.name}
            </Link>
          ))}
          `
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Menu;
