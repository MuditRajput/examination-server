export default function validateEmail(email: string): boolean {
    const regex = /@successive.tech$/i;
    return regex.test(email);
}
