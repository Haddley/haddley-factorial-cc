#include <assert.h>
#include <node_api.h>
#include <stdio.h>

double fac(int n)
{
  if (n < 2)
    return 1;
  return n * fac(n - 1);
}

double fac_tr_aux(int n, double acc)
{
  if (n < 2)
    return acc;
  return fac_tr_aux(n - 1, n * acc);
}

double fac_tr(int n)
{
  return fac_tr_aux(n, 1);
}

double fac_it(int n)
{
  double acc = 1;

  for (int i = n; i > 1; i--)
  {
    acc = acc * i;
  }

  return acc;
}

static napi_value Factorial_aux(napi_env env, napi_callback_info info, double (*funcp)(int))
{
  napi_status status;

  size_t argc = 1;
  napi_value args[1];
  status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
  assert(status == napi_ok);

  if (argc < 1)
  {
    napi_throw_type_error(env, NULL, "Wrong number of arguments");
    return NULL;
  }

  napi_valuetype valuetype0;
  status = napi_typeof(env, args[0], &valuetype0);
  assert(status == napi_ok);

  if (valuetype0 != napi_number)
  {
    napi_throw_type_error(env, NULL, "Wrong arguments");
    return NULL;
  }

  double value0;
  status = napi_get_value_double(env, args[0], &value0);
  assert(status == napi_ok);

  napi_value result;

  double res = funcp(value0);

  status = napi_create_double(env, res, &result);
  assert(status == napi_ok);

  return result;
}

static napi_value Factorial(napi_env env, napi_callback_info info)
{
  return Factorial_aux(env, info, &fac);
}

static napi_value Factorial_tr(napi_env env, napi_callback_info info)
{
  return Factorial_aux(env, info, &fac_tr);
}

static napi_value Factorial_it(napi_env env, napi_callback_info info)
{
  return Factorial_aux(env, info, &fac_it);
}

#define DECLARE_NAPI_METHOD(name, func)     \
  {                                         \
    name, 0, func, 0, 0, 0, napi_default, 0 \
  }

napi_value Init(napi_env env, napi_value exports)
{
  napi_status status;
  napi_property_descriptor desc[] = {
      DECLARE_NAPI_METHOD("factorial", Factorial),
      DECLARE_NAPI_METHOD("factorial_tr", Factorial_tr),
      DECLARE_NAPI_METHOD("factorial_it", Factorial_it)};

  status = napi_define_properties(env, exports, 3, desc);

  assert(status == napi_ok);

  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
