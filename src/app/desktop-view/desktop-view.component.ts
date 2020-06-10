import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Desktop } from './desktop.model';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.scss']
})
export class DesktopViewComponent implements OnInit {

  changeview: boolean;

  desktopView: Desktop[] = [
    new Desktop(
      '../../assets/images/desktopimages/store-bg.jpg',
      '../../assets/images/desktopimages/DirectoryPhone.png',
      '../../assets/images/desktopimages/market-icon.svg',
      'Find The Best Stores',
      'Search and receive the best discounts in our market directory.',
      '../../assets/images/desktopimages/news-bg.jpg',
      '../../assets/images/desktopimages/NewsPhone.png',
      '../../assets/images/desktopimages/mycontent.svg',
      'Get Updated',
      'Read the latest news and tips on how to have an amazing prom experience.'
    ),
    new Desktop(
      '../../assets/images/desktopimages/date-bg.jpg',
      '../../assets/images/desktopimages/FindaDatePhone.png',
      '../../assets/images/desktopimages/date.svg',
      'Find A Date',
      'Express interest in someone or ask them directly to prom.',
      '../../assets/images/desktopimages/promposal-bg.jpg',
      '../../assets/images/desktopimages/FindaDate(popup)Phone.png',
      '../../assets/images/desktopimages/promposal.svg',
      'Send Promposals',
      'Customize a video and send to your dream date.'
    ),
    new Desktop(
      '../../assets/images/desktopimages/limo-bg.jpg',
      '../../assets/images/desktopimages/LimoParty Phone.png',
      '../../assets/images/desktopimages/limoparty.svg',
      'Create A Limo Party',
      'Organize a limo party for you and your friends.',
      '../../assets/images/desktopimages/afterparty-bg.jpg',
      '../../assets/images/desktopimages/AfterPartyPhone.png',
      '../../assets/images/desktopimages/afterparty.svg',
      'Plan An Afterparty',
      'Keep the party going after prom.Invite, plan, and share.'
    ),
    new Desktop(
      '../../assets/images/desktopimages/chat-bg.jpg',
      '../../assets/images/desktopimages/ChatPhone.png',
      '../../assets/images/desktopimages/chat.svg',
      'Chat With Friends',
      'Chat with your date, your friends or within your limo and after party.',
      '../../assets/images/desktopimages/outfit-bg.jpg',
      '../../assets/images/desktopimages/MyOutfitPhone.png',
      '../../assets/images/desktopimages/outfits.svg',
      'Share Your Outfit',
      "Show off what you're wearing on the big day."
    ),
    new Desktop(
      '../../assets/images/desktopimages/checklist-bg.jpg',
      '../../assets/images/desktopimages/MyChecklistphone.png',
      '../../assets/images/desktopimages/checklist.svg',
      'Plan Your Prom',
      'Stay organized with your customizable prom checklist.',
      '../../assets/images/desktopimages/vote-bg.jpg',
      '../../assets/images/desktopimages/VotingNowPhone.png',
      '../../assets/images/desktopimages/trophy.svg',
      'Vote',
      'Cast your vote and become a Prom Legend.'
    ),
    new Desktop(
      '../../assets/images/desktopimages/photos-bg.jpg',
      '../../assets/images/desktopimages/MyPhotosPhone.png',
      '../../assets/images/desktopimages/photos.svg',
      'Share Your Photos',
      'Seamlessly share all of your prom pictures with your class.',
      '../../assets/images/desktopimages/prombook-bg.jpg',
      '../../assets/images/desktopimages/MyPrombookPhone.png',
      '../../assets/images/desktopimages/prombook.svg',
      'Create A Prombook',
      'Make prom last forever with your very own personal prombook.'
    )
  ];

  // desktopView: any = [{
  //   id: 1,
  //   backgroundurl: "../../assets/images/desktopimages/store-bg.jpg",
  //   image: "../../assets/images/desktopimages/DirectoryPhone.png",
  //   icon: "../../assets/images/desktopimages/market-icon.svg",
  //   title: "Find The Best Stores",
  //   subtitle: "Search and receive the best discounts in our market directory.",
  //   rightBackgroundurl: "../../assets/images/desktopimages/news-bg.jpg",
  //   rightImage: "../../assets/images/desktopimages/NewsPhone.png",
  //   rightIcon: "../../assets/images/desktopimages/mycontent.svg",
  //   rightTitle: "Get Updated",
  //   rightSubtitle: "Read the latest news and tips on how to have an amazing prom experience."
  // }, {
  //   id: 2,
  //   backgroundurl: "../../assets/images/desktopimages/date-bg.jpg",
  //   image: "../../assets/images/desktopimages/FindaDatePhone.png",
  //   icon: "../../assets/images/desktopimages/date.svg",
  //   title: "Find A Date",
  //   subtitle: "Express interest in someone or ask them directly to prom.",
  //   rightBackgroundurl: "../../assets/images/desktopimages/promposal-bg.jpg",
  //   rightImage: "../../assets/images/desktopimages/FindaDate(popup)Phone.png",
  //   rightIcon: "../../assets/images/desktopimages/promposal.svg",
  //   rightTitle: "Send Promposals",
  //   rightSubtitle: "Customize a video and send to your dream date."
  // }, {
  //   id: 3,
  //   backgroundurl: "../../assets/images/desktopimages/limo-bg.jpg",
  //   image: "../../assets/images/desktopimages/LimoParty Phone.png",
  //   icon: "../../assets/images/desktopimages/limoparty.svg",
  //   title: "Create A Limo Party",
  //   subtitle: "Organize a limo party for you and your friends.",
  //   rightBackgroundurl: "../../assets/images/desktopimages/afterparty-bg.jpg",
  //   rightImage: "../../assets/images/desktopimages/AfterPartyPhone.png",
  //   rightIcon: "../../assets/images/desktopimages/afterparty.svg",
  //   rightTitle: "Plan An Afterparty",
  //   rightSubtitle: "Keep the party going after prom.Invite, plan, and share."
  // }, {
  //   id: 4,
  //   backgroundurl: "../../assets/images/desktopimages/chat-bg.jpg",
  //   image: "../../assets/images/desktopimages/ChatPhone.png",
  //   icon: "../../assets/images/desktopimages/chat.svg",
  //   title: " Chat With Friends",
  //   subtitle: "Chat with your date, your friends or within your limo and after party.",
  //   rightBackgroundurl: "../../assets/images/desktopimages/outfit-bg.jpg",
  //   rightImage: "../../assets/images/desktopimages/MyOutfitPhone.png",
  //   rightIcon: "../../assets/images/desktopimages/outfits.svg",
  //   rightTitle: "Share Your Outfit",
  //   rightSubtitle: "Show off what you're wearing on the big day."
  // }, {
  //   id: 5,
  //   backgroundurl: "../../assets/images/desktopimages/checklist-bg.jpg",
  //   image: "../../assets/images/desktopimages/MyChecklistphone.png",
  //   icon: "../../assets/images/desktopimages/checklist.svg",
  //   title: "Plan Your Prom",
  //   subtitle: "Stay organized with your customizable prom checklist.",
  //   rightBackgroundurl: "../../assets/images/desktopimages/vote-bg.jpg",
  //   rightImage: "../../assets/images/desktopimages/VotingNowPhone.png",
  //   rightIcon: "../../assets/images/desktopimages/trophy.svg",
  //   rightTitle: "Vote",
  //   rightSubtitle: "Cast your vote and become a Prom Legend."
  // }, {
  //   id: 6,
  //   backgroundurl: "../../assets/images/desktopimages/photos-bg.jpg",
  //   image: "../../assets/images/desktopimages/MyPhotosPhone.png",
  //   icon: "../../assets/images/desktopimages/photos.svg",
  //   title: "Share Your Photos",
  //   subtitle: "Seamlessly share all of your prom pictures with your class.",
  //   rightBackgroundurl: "../../assets/images/desktopimages/prombook-bg.jpg",
  //   rightImage: "../../assets/images/desktopimages/MyPrombookPhone.png",
  //   rightIcon: "../../assets/images/desktopimages/prombook.svg",
  //   rightTitle: "Create A Prombook",
  //   rightSubtitle: "Make prom last forever with your very own personal prombook."
  // }];

  // secondSlide:any=[{
  //   id:"1",
  //   image:"../../assets/images/desktopimages/market-icon.svg",
  //   largetext:"Find The Best Stores",
  //   smalltext:"Search and receive the best discounts in our market directory."
  // },{
  //   id:"2",
  //   image:"../../assets/images/desktopimages/mycontent.svg",
  //   largetext:"Get Updated",
  //   smalltext:"Read the latest news and tips on how to have an amazing prom experience."
  // },{
  //   id:"3",
  //   image:"../../assets/images/desktopimages/date.svg",
  //   largetext:"Find A Date",
  //   smalltext:"Express interest in someone or ask them directly to prom."
  // },{
  //   id:"4",
  //   image:"../../assets/images/desktopimages/promposal.svg",
  //   largetext:"Send Promposals",
  //   smalltext:"Customize a video and send to your dream date."
  // },{
  //   id:"5",
  //   image:"../../assets/images/desktopimages/afterparty.svg",
  //   largetext:"Plan An Afterparty",
  //   smalltext:"Keep the party going after prom.Invite, plan, and share."
  // },{
  //   id:"6",
  //   image: "../../assets/images/desktopimages/chat.svg",
  //   largetext: " Chat With Friends",
  //   smalltext: "Chat with your date, your friends or within your limo and after party."
  // },{
  //   id:"7",
  //   image:"../../assets/images/desktopimages/outfits.svg",
  //   largetext:"Share Your Outfit",
  //   smalltext:"Show off what you're wearing on the big day."
  // },{
  //   id:"8",
  //   image: "../../assets/images/desktopimages/checklist.svg",
  //   largetext: "Plan Your Prom",
  //   smalltext: "Stay organized with your customizable prom checklist."
  // },{
  //   id:"9",
  //   image:"../../assets/images/desktopimages/trophy.svg",
  //   largetext:"Vote",
  //   smalltext:"Cast your vote and become a Prom Legend."
  // },{
  //   id:"10",
  //   image: "../../assets/images/desktopimages/photos.svg",
  //   largetext: "Share Your Photos",
  //   smalltext: "Seamlessly share all of your prom pictures with your class."
  // },{
  //   id:"11",
  //   image:"../../assets/images/desktopimages/prombook.svg",
  //   largetext:"Create A Prombook",
  //   smalltext:"Make prom last forever with your very own personal prombook."
  // },{
  //   id:"12",
  //   image:"../../assets/images/desktopimages/limoparty.svg",
  //   largetext: "Create A Limo Party",
  //   smalltext: "Organize a limo party for you and your friends."
  // }];


  constructor() {
  }

  ngOnInit(): void {

  }

}
