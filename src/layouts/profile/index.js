// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

// Overview page components
import Header from 'layouts/profile/components/Header';
import PlatformSettings from 'layouts/profile/components/PlatformSettings';

// Data
import profilesListData from 'layouts/profile/data/profilesListData';

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <form>
                  <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
                    User Information
                  </h6>
                  <div className='flex flex-wrap'>
                    <div className='w-full lg:w-6/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Username
                        </label>
                        <input
                          type='text'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='lucky.jesse'
                        />
                      </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Email address
                        </label>
                        <input
                          type='email'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='jesse@example.com'
                        />
                      </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          First Name
                        </label>
                        <input
                          type='text'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='Lucky'
                        />
                      </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Last Name
                        </label>
                        <input
                          type='text'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='Jesse'
                        />
                      </div>
                    </div>
                  </div>

                  <hr className='mt-6 border-b-1 border-blueGray-300' />

                  <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
                    Contact Information
                  </h6>
                  <div className='flex flex-wrap'>
                    <div className='w-full lg:w-12/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Address
                        </label>
                        <input
                          type='text'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09'
                        />
                      </div>
                    </div>
                    <div className='w-full lg:w-4/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          City
                        </label>
                        <input
                          type='email'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='New York'
                        />
                      </div>
                    </div>
                    <div className='w-full lg:w-4/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Country
                        </label>
                        <input
                          type='text'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='United States'
                        />
                      </div>
                    </div>
                    <div className='w-full lg:w-4/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Postal Code
                        </label>
                        <input
                          type='text'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='Postal Code'
                        />
                      </div>
                    </div>
                  </div>

                  <hr className='mt-6 border-b-1 border-blueGray-300' />

                  <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
                    About Me
                  </h6>
                  <div className='flex flex-wrap'>
                    <div className='w-full lg:w-12/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          About me
                        </label>
                        <textarea
                          type='text'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source.'
                          rows='4'
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    style={{ marginLeft: 'auto', display: 'block' }}
                    className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-4 ease-linear transition-all duration-150'
                    type='button'
                  >
                    Save
                  </button>
                </form>
              </div>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
