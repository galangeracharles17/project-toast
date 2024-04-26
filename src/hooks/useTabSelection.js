import React from 'react';

function useTabSelection(variantType, setVariantType, VARIANT_OPTIONS) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        const currentVariantIndex = VARIANT_OPTIONS.indexOf(variantType);
        const nextVariantIndex =
          (currentVariantIndex + 1) % VARIANT_OPTIONS.length;
        setVariantType(VARIANT_OPTIONS[nextVariantIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [variantType, setVariantType, VARIANT_OPTIONS]);
}

export default useTabSelection;
