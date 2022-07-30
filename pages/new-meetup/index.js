import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';
import { useRouter } from 'next/router';

function NewMeetupPage() {

  const router = useRouter();

  async function addMeetUpHandler(enteredMeetupData) {

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-type': 'application/json'
      }
    })

    const data = await response.json();
    console.log(data);

    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </>
  );
}

export default NewMeetupPage;