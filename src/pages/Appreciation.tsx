import Header from '../ui/Header';

const Appreciation = () => {
  return (
    <div className="container flex flex-col gap-8 h-full justify-center items-center">
      <figure>
        <img src="/assets/icon-thank-you.svg" alt="thank you for subscribing" />
      </figure>
      <Header
        title={'Thank you!'}
        subtitle={
          'Thanks for confirming your subscribtion! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com'
        }
        center={true}
      />
    </div>
  );
};

export default Appreciation;
