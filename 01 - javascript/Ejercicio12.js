function argumentTest(arg1 , arg2, arg3) {
    console.log(arg1, arg2, arg3);
    console.log(arguments);
}

argumentTest()
argumentTest("uno")
argumentTest("uno", "dos")
argumentTest("uno", "dos", "tres")
argumentTest("uno", "dos", "tres", "cuatro")

