export class CustomCrypto {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }

    // Basic XOR-based encryption with matrix multiplication and random values
    encrypt(text) {
        const randomValuesBefore = Array.from({ length: 10 }, () => Math.floor(Math.random() * 256));
        const randomValuesAfter = Array.from({ length: 10 }, () => Math.floor(Math.random() * 256));

        let encryptedText = '';
        encryptedText += String.fromCharCode(...randomValuesBefore);
        
        for (let i = 0; i < text.length; i++) {
            const textChar = text.charCodeAt(i);
            const keyChar = this.secretKey.charCodeAt(i % this.secretKey.length);
            const encryptedChar = (textChar + keyChar) % 256; // Assuming ASCII characters (0-255)
            encryptedText += String.fromCharCode(encryptedChar);
        }

        encryptedText += String.fromCharCode(...randomValuesAfter);
        return encryptedText;
    }

    // Basic XOR-based decryption with matrix multiplication and random values
    decrypt(encryptedText) {
        encryptedText = encryptedText.slice(10, -10); // Remove random values before and after text
        
        let decryptedText = '';
        for (let i = 0; i < encryptedText.length; i++) {
            const encryptedChar = encryptedText.charCodeAt(i);
            const keyChar = this.secretKey.charCodeAt(i % this.secretKey.length);
            const decryptedChar = (encryptedChar - keyChar + 256) % 256; // Assuming ASCII characters (0-255)
            decryptedText += String.fromCharCode(decryptedChar);
        }
        return decryptedText;
    }

    // Compare two encrypted passwords
    comparePasswords(encryptedPassword1, encryptedPassword2) {
        const randomValueLength = 10;
        
        // Extract encrypted text (excluding random values) from the encrypted passwords
        const encryptedText1 = encryptedPassword1.slice(randomValueLength, -randomValueLength);
        const encryptedText2 = encryptedPassword2.slice(randomValueLength, -randomValueLength);

        // Compare the extracted encrypted texts
        return encryptedText1 === encryptedText2;
    }
}