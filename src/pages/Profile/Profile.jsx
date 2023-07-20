import Badge from '../../components/Badge/Badge';
import LinkButton from '../../components/Button/LinkButton';
import AvatarCard from '../../components/Cards/AvatarCard';

const Profile = () => {
  return (
    <div className='px-4 my-[53px]'>
      <AvatarCard />
      <div className='pb-[44px] mt-9'>
        <h1 className='text-xl font-semibold leading-8 mb-2.5 md:mb-6 text-left'>
          About
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Pharetra varius tristique
          mauris auctor mauris pellentesque odio accumsan eget. Nec at ut
          malesuada elit elementum non nunc. Tellus vel purus consectetur elit
          tempus molestie ut tellus dignissim. Egestas elit eu aliquet euismod
          faucibus suspendisse scelerisque orci pulvinar.
        </p>
      </div>
      <div className='mb-11 flex gap-4'>
        <LinkButton label={'Retake Test'} className={'bg-primary text-white'} />
        <LinkButton
          href={'profile/edit'}
          label={'Edit profile'}
          className={'bg-[#F58800] text-white'}
        />
      </div>

      {/* LOCATION & EXPERIENCE */}
      <div>
        <div>
          <div className='inline-flex items-center gap-4'>
            <h2>Location</h2>
            {/* LOCATION ICON */}
          </div>
          <p>Lagos, Nigeria</p>
        </div>
        <div>
          <h2>Experience</h2>
          <p>4 years</p>
        </div>
      </div>
      <div>
        <h2>Experience</h2>
        <Badge />
      </div>
      <div>
        <h2>Languages</h2>
        <Badge />
      </div>
    </div>
  );
};

export default Profile;
