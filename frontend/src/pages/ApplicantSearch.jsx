import SearchBar from "../components/macros/SearchBar";

const ApplicantSearch = () => {
  return (
    <div className="flex flex-col gap-[20px] justify-center items-center h-screen w-full">
      <div className=" font-[550] text-[42px] text-[#424242]  leading-[27px] ">
        Applicant Search{" "}
      </div>
      <SearchBar />
    </div>
  );
};

export default ApplicantSearch;
