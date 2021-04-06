# CPlusPlus_addons_node-api

## init function

### syntax

```c
napi_value Init(napi_env env, napi_value exports)
{
    // Module initialization code goes here

    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
```

### example

```c
Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "MyProject"),
        Napi::Function::New(env, Method));
    return exports;
}

NODE_API_MODULE(addon, Init)
```
