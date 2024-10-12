import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christ Embassy Eindhoven Location</title>
        <meta name="description" content="Christ Embassy Eindhoven Google Map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-8">Christ Embassy Eindhoven</h1>
        <div className="relative w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.4560377648356!2d5.471160625496566!3d51.44399227962088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d99cda0dc8e7%3A0x85ae8c043284ce13!2sChrist%20Embassy%20Eindhoven!5e0!3m2!1sen!2snl!4v1697022162850!5m2!1sen!2snl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </div>
  );
}
