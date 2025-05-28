describe('Pruebas en <DemoComponent />',()=>{
    test('Esta prueba no debe de fallar',()=>{

        // 1. Inicializacion
        const message1='hello word';
    
    
        // 2. Estimulo
        const message2= message1.trim();
    
    
        // 3. OBservar el comportamiento.. Esperado
        // expect(message1).toBe(message2);
        expect(message1).toBe(message2);
    
    })
})

