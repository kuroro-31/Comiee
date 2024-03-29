@if (!$episode->is_free)
  @php
    // VIPユーザーは手数料20%に
    // $application_fee = 0.3;
    // if ($book->user->is_vip) {
    //     $application_fee = 0.2;
    // }
    
    $stripe = new \Stripe\StripeClient(config('app.stripe_secret'));
    $price = $stripe->prices->retrieve($price->id, [], ['stripe_account' => $book->user->stripe_user_id]);
    
    $session = $stripe->checkout->sessions->create(
        [
            'success_url' => config('app.top_url') . '/b/' . $book->title . '/' . $episode->number,
            'cancel_url' => config('app.top_url'),
            'payment_method_types' => ['card'],
            'line_items' => [
                [
                    'price' => $price->id,
                    'quantity' => 1,
                ],
            ],
            'payment_intent_data' => [
                'application_fee_amount' => $instant_price * 0.3,
            ],
            'mode' => 'payment',
            'automatic_tax' => [
                'enabled' => true,
            ],
            'metadata' => [
                'user_id' => Auth::id(),
                'book_id' => title,
                'episode_number' => $episode->number,
            ],
        ],
        ['stripe_account' => $book->user->stripe_user_id],
    );
  @endphp

  @section('footer-scripts')
    <script>
      const stripe = Stripe('{{ config('app.stripe_public') }}', {
        stripeAccount: '{{ $book->user->stripe_user_id }}'
      });
      document.addEventListener("DOMContentLoaded", function() {
        stripe.redirectToCheckout({
          sessionId: '{{ $session->id }}'
        }).then(function(result) {
          if (result.error) {
            let displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      }, false);
    </script>
  @endsection
@endif

@section('header-scripts')
  <script src="https://js.stripe.com/v3/"></script>
@endsection
