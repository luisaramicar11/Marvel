import { CheckoutCard } from "./CheckoutCard";
import { TotalCard } from "./TotalCard";
import { useStateValue } from "./StateProvider";
import "./CheckoutPage.css";

export function CheckoutPage() {
  const [{ basket }, dispatch] = useStateValue();
  function FormRow() {
    return (
      <>
        {basket?.map((item) => (
          <CheckoutCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            rating={item.rating}
            quantity={item.quantity}
          />
        ))}
      </>
    );
  }
  return (
    <div>
      <section className="row g-0">
        <article className="col-12 text-center pt-5">
          <h1 className="fw-bold">Shopping Cart</h1>
        </article>
        <article className="box-store ">
          <div className="box-store">
            <FormRow />
          </div>
        </article>
        <article className="box-store">
          <TotalCard />
        </article>
      </section>
    </div>
  );
}
