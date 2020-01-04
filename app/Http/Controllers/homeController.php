<?php
namespace App\Http\Controllers;
define('MAX_FILE_SIZE', 6000000);
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Sunra\PhpSimple\HtmlDomParser;

class homeController extends Controller
{
    public function index() {
        return view('welcome');
    }

    public function scraper(Request $request) {
        //get url
        $url = $request->get('url');

        //Init client
        $client = new Client();

        //Get response
        $response = $client->request('GET', $url);

        $response_status_code = $response->getStatusCode();
        $html = $response->getBody()->getContents();
        // dd($html);

        if($response_status_code == 200) {
            $dom = HtmlDomParser::str_get_html($html);
            dd($dom);
            $find= $dom->find('div[class="tile tile-no-style"]',0)->find('div[class="slider__title"]',0)->find('a',0)->text();
            dd(trim($find));
        }

    }
   
}
