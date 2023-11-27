// hello.cc
//esta es una de las librerias de c++ que se necesitan para trabajar con node
#include <node.h>

//se crea un primer namespace, no lo vamos a usar al principio
namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

//este es el primer metodo
void Method(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(String::NewFromUtf8(
        isolate, "Mundo").ToLocalChecked());
}
//el modulo que queremos exportar
void Initialize(Local<Object> exports) {
    NODE_SET_METHOD(exports, "Holaaaa", Method);
}

//se setea el modulo y se inicializa
NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo