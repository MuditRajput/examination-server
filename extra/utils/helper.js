export default function validateEmail(email){
    const regex=/@successive.tech$/i;
    return regex.test(email);
}
