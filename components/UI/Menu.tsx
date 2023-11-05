import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';

const links = [
  { href: '/', label: 'About', name: 'About' },
  { href: '/project', label: 'Project', name: 'Project' },
  { href: '/work', label: 'Work', name: 'Work' },
  { href: '/skill', label: 'Skill', name: 'Skill' },
];

const DropDownMenu = () => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='md:hidden bg-violet-500 inline-flex w-full justify-center rounded-md px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
        <AiOutlineMenu size={30} color='white' />
      </Menu.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {links.map((link) => (
            <div key={link.href} className='px-1 py-1'>
              <Menu.Item
                as={Link}
                // key={link.href}
                href={link.href}
                className='text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-lg active:bg-violet-500 active:text-white hover:bg-violet-500 hover:text-white font-mplus'
              >
                {link.name}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownMenu;
