export const formatCedula = (value: string): string => {

    /**====================================
     * REMOVE ALL NON-NUMERIC CHARACTERS
    =======================================*/
    const numbers = value.replace(/\D/g, '');

    /**=====================
     * LIMIT TO 11 DIGITS
    ========================*/
    const limited = numbers.slice(0, 11);

    /**=============================
     * APPLY FORMAT XXX-XXXXXXX-X
    ================================*/
    if (limited.length <= 3) {
        return limited;
    } else if (limited.length <= 10) {
        return `${limited.slice(0, 3)}-${limited.slice(3)}`;
    } else {
        return `${limited.slice(0, 3)}-${limited.slice(3, 10)}-${limited.slice(10)}`;
    }

};