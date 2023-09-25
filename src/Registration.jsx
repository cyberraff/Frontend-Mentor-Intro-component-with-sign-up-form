import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
	const validationSchema = Yup.object({
		firstName: Yup.string().required('First name can not be empty'),
		lastName: Yup.string().required('Last name can not be empty'),
		email: Yup.string()
			.email('Looks like this is not an email')
			.required('Looks like this is not an email'),
		password: Yup.string()
			.min(8, 'Password must be at least 8 characters')
			.required('Password can not be empty'),
	});

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: (values) => {
			// Handle form submission here, e.g., send data to the server
			console.log(values);
		},
	});

	return (
		<div className='rounded-2xl bg-white mx-12 p-10 shadow-xl drop-shadow-xl'>
			<form onSubmit={formik.handleSubmit}>
				<div className='mb-4 relative'>
					<label htmlFor='firstName'></label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						placeholder='First Name'
						{...formik.getFieldProps('firstName')}
						className={`border rounded-md p-5 w-full font-bold ${
							formik.touched.firstName && formik.errors.firstName
								? 'border-[#ff7a7a] text-[#ff7a7a]'
								: 'border-gray-300'
						}`}
					/>
					{formik.touched.firstName && formik.errors.firstName && (
						<div className='text-[#ff7a7a] absolute  top-4 right-8 mt-2'>
							<i className=''>
								<img src='../icon-error.svg' alt='alt' />
							</i>
						</div>
					)}
					{formik.touched.firstName && formik.errors.firstName && (
						<div className='text-[#ff7a7a] text-end text-base pt-2'>
							{formik.errors.firstName}
						</div>
					)}
				</div>

				<div className='mb-4 relative'>
					<label htmlFor='lastName'></label>
					<input
						type='text'
						id='lastName'
						name='lastName'
						placeholder='Last Name'
						{...formik.getFieldProps('lastName')}
						className={`border rounded-md p-5 w-full font-bold ${
							formik.touched.lastName && formik.errors.lastName
								? 'border-[#ff7a7a]'
								: 'border-gray-300'
						}`}
					/>
					{formik.touched.lastName && formik.errors.lastName && (
						<div className='text-[#ff7a7a] absolute  top-4 right-8 mt-2'>
							<i className=''>
								<img src='../icon-error.svg' alt='alt' />
							</i>
						</div>
					)}
					{formik.touched.lastName && formik.errors.lastName && (
						<div className='text-[#ff7a7a] text-end text-base pt-2'>
							{formik.errors.lastName}
						</div>
					)}
				</div>

				<div className='mb-4 relative'>
					<label htmlFor='email'></label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder={
							formik.touched.email && formik.errors.email
								? 'email@example.com'
								: 'Email Address'
						}
						{...formik.getFieldProps('email')}
						className={`border rounded-md p-5 w-full font-bold ${
							formik.touched.email && formik.errors.email
								? 'border-[#ff7a7a] placeholder-[#ff7a7a]'
								: 'border-gray-300'
						}`}
					/>
					{formik.touched.email && formik.errors.email && (
						<div className='text-[#ff7a7a] absolute  top-4 right-8 mt-2'>
							<i className=''>
								<img src='../icon-error.svg' alt='alt' />
							</i>
						</div>
					)}
					{formik.touched.email && formik.errors.email && (
						<div className='text-[#ff7a7a] text-end text-base pt-2'>
							{formik.errors.email}
						</div>
					)}
				</div>

				<div className='mb-4 relative'>
					<label htmlFor='password'></label>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Password'
						{...formik.getFieldProps('password')}
						className={`border rounded-md p-5 w-full font-bold ${
							formik.touched.password && formik.errors.password
								? 'border-[#ff7a7a]'
								: 'border-gray-300'
						}`}
					/>
					{formik.touched.password && formik.errors.password && (
						<div className='text-[#ff7a7a] absolute  top-4 right-8 mt-2'>
							<i className=''>
								<img src='../icon-error.svg' alt='alt' />
							</i>
						</div>
					)}
					{formik.touched.password && formik.errors.password && (
						<div className='text-[#ff7a7a] text-end text-base pt-2'>
							{formik.errors.password}
						</div>
					)}
				</div>

				<button
					type='submit'
					className='w-full bg-[#38cc8c] text-white p-5 rounded-md font-bold'>
					CLAIM YOUR FREE TRIAL
				</button>
			</form>
			<p className=' text-xl pt-4 px-6 lg:text-base'>
				By clicking the button, you are agreeing to our{' '}
				<span className=' font-bold text-[#ff7a7a]'>
					Terms and Services
				</span>
			</p>
		</div>
	);
};

export default RegistrationForm;
