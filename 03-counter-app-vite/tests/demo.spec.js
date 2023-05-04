describe("Pruebas en <DemoComponent />", () => {
  
    test("esta prueba no debe fallar", () => {
    const message = "hola mundo";
    const message2 = message.trim();

    expect(message).toBe(message2);

    expect(message);
  });
});
