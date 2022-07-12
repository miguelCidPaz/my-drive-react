import { useTranslation } from "react-i18next";

export const Account = ({ name }) => {
    const [t] = useTranslation("global");

    return (
        <div>
            <h2 className="form--label">
                {t("Account.message")}
            </h2>
            <p className="form--label">{t("Account.welcome")} {name}</p>
        </div>
    )
}