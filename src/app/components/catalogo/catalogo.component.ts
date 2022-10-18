import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

<<<<<<< HEAD
=======
  film_popular: any[] = [];
  film_dorama: any[] = [];
  film_marathon: any[] = [];


>>>>>>> 2d3ff2d5c297f6f06022cd895f817243593e714a
  constructor() { 
    
  }

  ngOnInit(): void {
<<<<<<< HEAD
=======
    this.film_popular = [
      {
        banner:'https://occ-0-1009-444.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS8TTN7ds19eu7HIZm815FCg97RGliHOMs4ojygsTJsTDvjczmOxEHHjTze6Md8q2OUR0uYKmRXlBqxd11HONdfh29bXXdPSyr7NrJdO8XimywDLyeXlI_0WMaPxfxeXK6F-2Q.jpg?r=dbd',
        title: 'Os vizinhos',
      },
      {
        banner:'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVsa2tqGC3OwtktWuEJQNOO9jhpxY-UxdEI5uqi7B3EIvZalJK1-zLHV1b_QxG6cLunkFDTTHr5czQQoqCGc8SaQJmvnvXJ5l8r0.jpg?r=8d0',
        title: 'Como se tornar o pior aluno',
      },
      {
        banner:'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbOIcpIkNtVMIWM59aZQ2MoqIsh3rWtAmYWQSVLYlSymdF-Qq6s9xNlo_exJl_5itQqeLUr33zNtYwAuw6psRumDIPpZ4sGmwv1rUGaFxMSy83RBChzYcDX43CplpJGJy1Z9w4pZqvDlzEJC2a-FI2QyzPa2WAZl6gXbusqzR90G8ETbzHmSpXaoQaT1X69TdYd6t8fBO_tv0f3zLjVbBK9w3pL5Afo_1hziwN67qI_eDpEk_78ZfahDCJQ61MLQQSvbW16JW0NspHWIWYpsYZDHkJQxUA.jpg?r=923d',
        title: 'Cobra Kai',
      },
      {
        banner:'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQPQrjBdoPgdqX7WK6su62mthcmgZFzvN4_jR3cIFhObIP6IBE1R1_v2VH9RoCVSVBCxB9_F6qFLdMnhuRcTq7pLYdhT9_9MS2XriHlv50scEnKzOOcWMQ1ywmFzojIEin4v.jpg?r=132',
        title: 'The Crown',
      },
      {
        banner:'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWp36imNuM2VeAvlGi8aNR7b4e5DjvDbqTTMgAqKd3OM536tBuGetuG93qzkznUQ8Gu9SDFhRm_Jy9wGRX35k1ashf_9DI5MSZrm1EffVli7cCla-Sq_QZwempbk_GFxCDT9.jpg?r=cb7',
        title: 'Fogo Ardente',
      },
      {
        banner:'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSLzIK7iBvXcgjgmrMG5BgHb57sHX3RSOLtCaxuW83lZWcChht8nLpduu26xt5Mqyemg6oey5lehmIJoz5Hi2og_GbPlwKX4aO6xJRYqHSr9ZggXzcKK-_tSLBK4ee2HeuQn.jpg?r=c68',
        title: 'Stranger Things',
      },
    ];
    this.film_dorama = [
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQr-UIbw_ztmsITDX8rcwhftgMgg1T8GnWzVpOLs300Ud55XKZDsEftF2OvPA3KbtJ-SCubkTcJV1dHXavN8sBpiPOvzuooK_WHRFx5X6INQUrperC5-RM9TDHEf30n8QEXS5RhNZ7VxErCpWwTpMg53DDMik1moI36iki6vLMPQDNr4l-3IkzFI90HQtMrMPKYGJ3tYHpY9C9Mb7BgOgEZbQGX_n8mkF2HrtMWESuOp_mRDCdo7c4h8F3iXca6uNUZ7nBHEWbRi2B-KYbZ9kGmsyQAO2gq8ZAcLyIgj2D9Qzoy4kTQhkK0-W6gxs2kLqJdViyVYULbbupTFAhm7uSiXLubAjWcdTedgorQ5LwgSyGOLwlw13QdI4qDjVy-jGRMaEwuNyasbZ0rGDK-jWlFCxMmuhP5uCWta_9uS3dJDLBYjomEie6E.jpg?r=233',
        title: 'Uma Advogada Extraordinária'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXVw-xGRBSRuvXi6AOFft-5-Yi8lOSa9pCBZb4daNSts9ufqFoZemRPRiPktoiBtFNtzxxMGo404XUI_0OARi61s1SdD-dFAqzAH0W84h0uNBtInoj2hzFIxCBUgHLC0OCYZ.jpg?r=d40',
        title: 'All of Us Are Dead'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQfoez0QV4r7JhL6_TJ7tm5RLRJDnQSR8zYbaLe_G6QS-ojPWI6MZn_R_z0k0CY5-43KwC1HvI96O4AC_Xgqgrxe11KR3qo2sPQMZtWvYaVwxblEyfScd_pisx0BVTPt6lI6.jpg?r=fbf',
        title: 'Hometown Cha-Cha-Cha'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZw2QA6bQMX0j348Ire0wbawe4akyZg50Vjc14fN8IUxVV2ZdNDDwrnj5XNpyghFm2dBENWgzWIKC0bYwc74VuocxTqm9f-4kZ4p5aq4OkQrIsuMuK3JbfadU1M0OWK54TH9.jpg?r=19f',
        title: 'Trinta e Nove'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcfR6Ov4BWvItkyqFCjU6Dl2JWmjyxQIi--Ehd8_f2PnKDHBAmgcjNnFz_uX3cf6Il5kajBqgw9jkEmn8lig8ogMypPQr6bbUpV4v3sHM6_76teohZgdchuYjwlocWcHiNpK.jpg?r=6b7',
        title: 'Passarela de Sonhos'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfYxmx11-5vG0ZWUCF_-GTajVtH7LJXP3kDIOR00PqvgBQwjAyTaY7rtTKOhuD_j3m4mDkE9SIN7Lzf3ad98NsS8PY6urOeOa94Bl8GHtaoSp_y0DqjfOvjY5Bry_rXhAhLK.jpg?r=4de',
        title: 'O Mito de Sísifo'
      },
    ];
    this.film_marathon = [
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfUn-otPRN__f94Bg7O1j7Gw9mbh4S47GVEYMcy0JUqf5azfCT7XyqabI1jNu-435izx1H2oRQcUe7d_a5QQdatoPvCJEbfcI9pCZNa9d6ExWHxFe7X07QG-cSH_sHWWZNP1.jpg?r=952',
        title: 'Insatiable'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAU8V-LjuM653Im3yqacjWMCBM3RDUwAzgJyoi7yBjW3rgD1xobajPN4Qfso2TCuIZukER5dUmw4VyOJnMjogrjOv4nree7PXbk0wV3PTQHNcbjz-lOkGH_J1p6aRzTl3XJ.jpg?r=209',
        title: 'Sweet Tooth'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTMlIylDKngfDYgfswq6DArLx6KCwGqbR7kB03DxAhEQVVvBVRU0ifQDoF4fV4Q03OKNZ3HH0W_LooXuwBzB8gBE6dDB6nvhRrRgtb2RG_74zq__4qu4WIhEY922RArEUFph.jpg?r=ea9',
        title: 'Sandman'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSzMclbWDUwOetVzDGyKyTL411iFqfbB_919RGuJkcV3K-LVIlIqDLFYEghqHbvczA--idirpRjIlvDKcAL2urz4rC4mSOkXHBrDHkVyKRlx3trtFSJ4ENPejfP4QXSRPIpQ.jpg?r=247',
        title: 'Perdidos no Espaço'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmvcCAC-ZCQi4BD5qU3_FMCniWj7t7_1IViRPaHYwy4-ORNRbrExpye7FwENB2Aqc0G8hxS2TUDMJSi6VozjP3u9qA5vRqS_t-oMDdOxTQ8U_-Gd-ds-dbbE-FCm-nJc8N2.jpg?r=30b',
        title: 'Um menino chamado Natal'
      },
      {
        banner: 'https://occ-0-577-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWbUXh_0qWfID5qMH-K_ngPM12dd1q8Ox-sWjbNmyy0zhjMdznvUPgW05g2WiKnPStjlk2ssLs1jkZhLlBEx94wlmZF6sy7hJBuDvhR_Lzbq31gmWeZuFYaWdn7eTN5eL6pZ.jpg?r=9af',
        title: 'Mistério no Mediterrâneo'
      },
    ];
>>>>>>> 2d3ff2d5c297f6f06022cd895f817243593e714a
  }

}
