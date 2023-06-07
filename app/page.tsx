import supabase from "@/utils/supabase-server";

export default async function Home() {
  const { data: user } = await supabase.auth.getUser();
  const { data: profiles } = await supabase.from("profiles").select();

  return (
    <main className="">
      <div className="row">
        <div className="col-6">
          {JSON.stringify(user)}
          <br />
          <br />
          <br />
          <br />
          {JSON.stringify(profiles)}
          <h1 className="header">Hello</h1>
          <p className="">
            Experience our Auth and Storage through a simple profile management example. Create a user profile and upload an avatar image. Fast, simple, secure.
          </p>
        </div>
      </div>
    </main>
  );
}
