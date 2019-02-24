using System.Linq;
using AutoMapper;
using DatingApp.Api.Dto;
using DatingApp.Api.Models;

namespace DatingApp.Api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            //Mapping done and resolved PhotoUrl from photo class and calculated age prop by 
            //making new method  CalculateAge() in Extension class.
            CreateMap<User, UserForDetailedDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            })
            .ForMember(dest => dest.Age, opt =>
            {
                opt.ResolveUsing(src => src.DateOfBirth.CalculateAge());
            });

            //Mapping done and resolved PhotoUrl from photo class and calculated age prop by 
            //making new method  CalculateAge() in Extension class.
            CreateMap<User, UserForListsDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            })
            .ForMember(dest => dest.Age, opt =>
            {
                opt.ResolveUsing(src => src.DateOfBirth.CalculateAge());
            });

            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}