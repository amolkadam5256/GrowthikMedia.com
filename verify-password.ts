import bcrypt from "bcryptjs";

const hash = "$2a$10$E.i5tei/gAOp3/XwGbm.oOWu56TT5s1L8wAnRlk9ZhmlMjzJ1kGwC";
const password = "Admin@123";

async function verify() {
  const match = await bcrypt.compare(password, hash);
  console.log("Password Hash Match:", match);
}

verify();
