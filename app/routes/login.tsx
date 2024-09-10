// // app/routes/login.tsx
// import { Form, useActionData } from "@remix-run/react";
// import { useAuth } from "~/context/AuthContext";

// export default function LoginPage() {
//   const actionData = useActionData();
//   const { login } = useAuth();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const username = formData.get("username");
//     const password = formData.get("password");

//     // ส่งข้อมูลไปที่ Action Function เพื่อทำการล็อกอิน
//     const response = await fetch("/login", {
//       method: "POST",
//       body: new URLSearchParams({
//         username: username,
//         password: password,
//       }),
//     });

//     if (response.ok) {
//       login(username);
//     } else {
//       // handle error
//     }
//   };

//   return (
//     <Form method="post" onSubmit={handleSubmit}>
//       {actionData?.error && <p>{actionData.error}</p>}
//       <div>
//         <label>
//           Username: <input type="text" name="username" />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password: <input type="password" name="password" />
//         </label>
//       </div>
//       <button type="submit">Login</button>
//     </Form>
//   );
// }
