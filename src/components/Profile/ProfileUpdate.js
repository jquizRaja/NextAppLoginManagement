import Button from "../Global/Button";
import Form from "../Global/Form";
import { updateUser } from "@/actions/authActions";

const ProfileUpdate = ({update}) => {
  async function handleUpdateProfile(formData) {
    const name = formData.get("name");
    const image = formData.get("image");

    if(update){
      //when update() on client side the page will rerender
      //server side nill not re-render 
      update({name,image})
    }

    const res = await updateUser({ name, image })
    if(res?.msg) alert(res?.msg)
  }
  return (
    <div>
      <h2>Update Profile</h2>
      <Form action={handleUpdateProfile} style={{ margin: "30px 0" }}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="image" placeholder="Image" required />
        <Button value='Update Profile' />
      </Form>
    </div>
  );
};

export default ProfileUpdate;
