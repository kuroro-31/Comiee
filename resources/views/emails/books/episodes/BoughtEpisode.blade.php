@extends('emails.base')

@section('email-content')
  {{-- タイトル --}}
  <tr>
    <td>
      <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;word-break:break-word">
        <tbody>
          <tr>
            <td>
              <span
                style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823">
                <span
                  style="color:#050505;text-decoration:none;font-family:Roboto-Medium,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:17px;line-height:21px;font-weight:600"
                  target="_blank">
                  {{ $mailData['book']->title }}
                  の{{ $mailData['episode']->number }}話が読めるようになりました。
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <tr>
    <td height="28" style="line-height:28px"></td>
  </tr>

  {{-- 本文 --}}
  <tr>
    <td>
      <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
        <tbody>
          <tr>
            <td
              style="font-size:11px;font-family:LucidaGrande,tahoma,verdana,arial,sans-serif;background:#ffffff;border:solid 1px #e4e6eb;border-radius:6px;padding:15px;display:block">
              <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center"
                style="border-collapse:collapse;max-width:300px;word-break:break-word">
                <tbody>
                  <tr>
                    <td width="80" align="center">
                      <a href="{{ config('app.top_url') . '/b/' . $mailData['book']->title . '/' . $mailData['episode']->number }}"
                        style="color:#1b74e4;text-decoration:none" target="_blank">
                        <img width="250" height="250" src="{{ $mailData['episode']->thumbnail }}"
                          style="border:solid 1px rgba(0,0,0,.15);object-fit:cover" loading="lazy">
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td height="7" style="line-height:7px"></td>
                  </tr>
                  <tr>
                    <td width="100%" align="center">
                      <a href="{{ config('app.top_url') . '/b/' . $mailData['book']->title . '/' . $mailData['episode']->number }}"
                        style="color:#141823;text-decoration:none;font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:18px;line-height:21px;font-weight:bold"
                        target="_blank">
                        {{ $mailData['book']->title }}<br>
                        {{ $mailData['episode']->number }}{{ __('話') }}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td height="17" style="line-height:17px"></td>
                  </tr>

                  {{-- 新しいエピソードを読む --}}
                  <tr>
                    <td width="100%" align="center">
                      <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                        <tbody>
                          <tr>
                            <td>
                              <table border="0" width="100%" cellspacing="0" cellpadding="0"
                                style="border-collapse:collapse">
                                <tbody>
                                  <tr>
                                    <td
                                      style="border-collapse:collapse;border-radius:6px;text-align:center;display:block;background:#1877f2;padding:8px 16px 10px 16px">
                                      <a href="{{ config('app.top_url') . '/b/' . $mailData['book']->title . '/' . $mailData['episode']->number }}"
                                        style="color:#1b74e4;text-decoration:none;display:block" target="_blank">
                                        <center>
                                          <font size="3">
                                            <span
                                              style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;white-space:nowrap;font-weight:bold;vertical-align:middle;color:#ffffff;font-weight:500;font-family:Roboto-Medium,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:14px;line-height:14px">
                                              {{ __('さっそくエピソードを読む') }}
                                            </span>
                                          </font>
                                        </center>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
@endsection
