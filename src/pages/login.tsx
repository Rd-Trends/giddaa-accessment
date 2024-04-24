import { z } from "zod";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../hooks/useUser";
import { useLoginUser } from "../api/mutations";

const LoginPage = () => {
  const { onLoginSuccess } = useUser();
  const loginMutation = useLoginUser();

  const { register, handleSubmit, formState, setError, reset } =
    useForm<Schema>({
      resolver: zodResolver(LoginSchema),
      mode: "all",
    });

  const login = handleSubmit(async (data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        reset();
        onLoginSuccess?.(data.value.value);
      },
      onError: (error) => {
        setError("root", {
          message: error?.message || "An error occurred",
        });
      },
    });
  });

  return (
    <div className=" flex flex-col h-full w-screen min-h-screen items-center justify-center">
      <div className=" w-full max-w-md p-4 md:p-8 md:rounded-lg md:shadow-lg bg-white space-y-6">
        <div className=" flex flex-col md:items-center md:text-center">
          <Logo />
          <span className=" text-xl leading-4 text-gray-600 font-millik ">
            Weclome back
          </span>
          <p>Sign in to your account and start using Giddaa</p>
        </div>
        <form onSubmit={login} className="flex flex-col space-y-4">
          <div>
            <label
              className={
                "w-full flex flex-col items-start space-y-1 text-sm font-medium " +
                " leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              }>
              <span>Email</span>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                autoComplete="email"
                className={
                  "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 " +
                  "text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm " +
                  "file:font-medium placeholder:text-grey-500 focus-visible:outline-none " +
                  " focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 " +
                  " disabled:cursor-not-allowed disabled:opacity-50"
                }
              />
            </label>
            {formState.errors?.email && (
              <span className="text-red-500 text-sm">
                {formState.errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label
              className={
                "w-full flex flex-col items-start space-y-1 text-sm font-medium " +
                " leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              }>
              <span>Password</span>
              <input
                type="password"
                placeholder="********"
                autoComplete="current-password"
                {...register("password")}
                className={
                  "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 " +
                  "text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm " +
                  "file:font-medium placeholder:text-grey-500 focus-visible:outline-none " +
                  " focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 " +
                  " disabled:cursor-not-allowed disabled:opacity-50"
                }
              />
            </label>
            {formState.errors?.password && (
              <span className="text-red-500 text-sm">
                {formState.errors.password.message}
              </span>
            )}
          </div>

          <button
            className={
              "inline-flex items-center justify-center whitespace-nowrap rounded-md " +
              "bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 " +
              "text-sm font-medium ring-offset-transparent transition-colors " +
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
              "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            }>
            {loginMutation.isPending ? (
              <>
                <span
                  role="presentation"
                  className=" size-4 border-2 border-white border-r-transparent rounded-full animate-spin mr-4"
                />
                <span>loading...</span>
              </>
            ) : (
              "Sign in"
            )}
          </button>

          {formState.errors?.root && (
            <span className="text-red-500 text-sm -mt-2">
              {formState.errors.root.message}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type Schema = z.infer<typeof LoginSchema>;
