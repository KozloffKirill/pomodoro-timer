import { useState } from "react";

function useModalState(initialIsOpen = false) {
   const [isOpen, setIsOpen] = useState(initialIsOpen);

   function onOpen() {
      setIsOpen(true);
   }

   function onClose() {
      setIsOpen(false);
   }

   function onToggle() {
      setIsOpen(!isOpen);
   }

   return [isOpen, onOpen, onClose, onToggle];
}

export default useModalState;