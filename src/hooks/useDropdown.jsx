import { useEffect, useRef, useState } from "react";

function useDropdown(initialIsOpen = false, handler) {
   const [isOpen, setIsOpen] = useState(initialIsOpen);
   const dropdownRef = useRef(null);

   useEffect(() => {
      function clickOutside(e) {
         if (dropdownRef?.current && !dropdownRef.current.contains(e.target)) {
            handler();
         }
      }

      if (isOpen) {
         document.addEventListener('mousedown', clickOutside);
      }

      return () => {
         document.removeEventListener('mousedown', clickOutside);
      };

   }, [isOpen, dropdownRef]);


   return [isOpen, setIsOpen, dropdownRef];
}

export default useDropdown;