describe("index",function(){
    it("should render second screen when button is clicked",function(){

       expect(app.currentScreen).toBe("secondScreen.html");
    });
})