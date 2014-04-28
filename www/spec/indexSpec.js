describe("index",function(){
    it("should render second screen when button is clicked",function(){
       app.button();
       expect(app.currentScreen).toBe("secondScreen.html");
    });
})