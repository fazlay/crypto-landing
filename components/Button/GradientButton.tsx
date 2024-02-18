export function GradientButton({ className, ...props }: any) {
  return (
    <a className=" inline-flex min-h-[50px] min-w-[176px] items-center  justify-center bg-gradient-to-r from-purple-400 to-pink-600 text-[22px] text-white">
      <div className=" m-[2px] flex min-h-[50px] min-w-[176px] items-center justify-center bg-[#161730] px-[15px]">
        {props.children}
      </div>
    </a>
  )
}

//@TODO: Make it Reusable and merge it with our button component
