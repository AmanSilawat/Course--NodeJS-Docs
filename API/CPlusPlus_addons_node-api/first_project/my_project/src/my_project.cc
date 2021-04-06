#include <napi.h>
#include <iostream>

using namespace Napi;
using namespace std;

int main() {
  cout << "Hello this a print message by C++ code.---------------------";
}

Napi::String Method(const Napi::CallbackInfo& info) {
  char str[100] = "C++";

  Napi::Env env = info.Env();
  return Napi::String::New(env, str);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "MyProject"),
              Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(addon, Init)
