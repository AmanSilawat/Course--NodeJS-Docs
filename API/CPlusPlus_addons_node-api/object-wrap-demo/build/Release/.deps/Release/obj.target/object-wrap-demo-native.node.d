cmd_Release/obj.target/object-wrap-demo-native.node := g++ -o Release/obj.target/object-wrap-demo-native.node -shared -pthread -rdynamic -m64  -Wl,-soname=object-wrap-demo-native.node -Wl,--start-group Release/obj.target/object-wrap-demo-native/src/object_wrap_demo.o Release/obj.target/node_modules/node-addon-api/src/nothing.a -Wl,--end-group 