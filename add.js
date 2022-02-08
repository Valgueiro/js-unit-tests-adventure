export default function add(a, b) {
    if(typeof a === 'string' || typeof b === 'string'){
        return 'Erro'
    }
    
    return a + b;
}
