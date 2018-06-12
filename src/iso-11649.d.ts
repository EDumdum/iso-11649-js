/**
 * Check requirements.
 * Returns value as a valid Creditor Reference using rawValue.
 * 
 * Requirements:
 * - rawValue must be not `Null`
 * - rawValue must be of type `String`
 * - rawValue must respect format `^[A-Z0-9]{1,21}$`
 * 
 * @param {*} rawValue 
 */
export function generate(rawValue: string): string;

/**
 * Check requirements.
 * Returns if the Creditor Reference format against ISO 11649 specifications is valid.
 * 
 * Requirements:
 * - rawValue must be not `Null`
 * - rawValue must be of type `String`
 * - rawValue must respect format `^RF[0-9]{2}[A-Z0-9]{1,21}$`
 * 
 * @param {*} rawValue 
 */
export function validate(rawValue: string): boolean;