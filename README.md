# Strapi application

A quick description of your strapi application

CREATE OR REPLACE FUNCTION transaction_current_balance_account() 
  RETURNS TRIGGER AS 
$transactions$
BEGIN
    UPDATE accounts SET current_balance = current_balance + cast((OLD.amount) as double precision) WHERE id = NEW.account_id;
    RETURN NEW;
END;
$transactions$ 
LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS transaction_insert
  ON transactions;
CREATE TRIGGER transaction_update
  AFTER UPDATE
  ON transactions
  FOR EACH ROW
  WHEN (OLD.account_id IS DISTINCT FROM NEW.account_id)
  EXECUTE PROCEDURE transaction_current_balance_account();

  SELECT id, current_balance FROM accounts;